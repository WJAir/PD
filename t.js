const fs = require('fs');
const path = require('path');

function getUniqueTagsFromMarkdownFiles(dirPath = './docs') {
  const tagSet = new Set();

  function readTagsFromMdFilesHelper(dirPath) {
    fs.readdirSync(dirPath).forEach(file => {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      if (stat.isFile() && path.extname(file) === '.md') {
        const content = fs.readFileSync(filePath, 'utf8');
        const matches = content.match(/tags:\s*\[(.*?)\]/);
        if (matches) {
          const tags = matches[1].split(',').map(tag => tag.trim());
          tags.forEach(tag => tagSet.add(tag));
        }
      } else if (stat.isDirectory()) {
        readTagsFromMdFilesHelper(filePath);
      }
    });
  }

  readTagsFromMdFilesHelper(dirPath);

  return Array.from(tagSet);
}

const uniqueTags = getUniqueTagsFromMarkdownFiles();
console.log(uniqueTags);
