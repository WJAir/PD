/** 复制文本 */
export const copy = (value, cb) => {
  // 动态创建 textarea 标签
  const textarea = document.createElement('textarea');
  // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域

  textarea.readOnly = 'readonly';
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  // 将要 copy 的值赋给 textarea 标签的 value 属性
  // 网上有些例子是赋值给innerText,这样也会赋值成功，但是识别不了\r\n的换行符，赋值给value属性就可以
  textarea.value = value;
  // 将 textarea 插入到 body 中
  document.body.appendChild(textarea);
  // 选中值并复制
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);
  document.execCommand('Copy');
  document.body.removeChild(textarea);
  if (cb && Object.prototype.toString.call(cb) === '[object Function]') {
    cb();
  }
};

/** 生成指定长度字符串 */
export const randomString = (length) => {
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz1234567890';
  // var strLen = chars.length;
  var randomStr = '';
  for (var i = 0; i < length; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return randomStr;
};

/** 根据传入字符生成随机长度字符串 */
export const randomStringType = (length, characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') => {
  let result = '';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }

  return result;
};

/** 获取当前日期和时间 */
export const times = () => {
  const today = new Date();

  /** date */
  // 获取日
  const DD = String(today.getDate()).padStart(2, '0');
  // 获取月份，1 月为 0
  const MM = String(today.getMonth() + 1).padStart(2, '0');
  // 获取年
  const yyyy = today.getFullYear();

  /** time */
  // 获取当前小时数(0-23)
  const hh = String(today.getHours()).padStart(2, '0');
  // 获取当前分钟数(0-59)
  const mm = String(today.getMinutes()).padStart(2, '0');
  // 获取当前秒数(0-59)
  const ss = String(today.getSeconds()).padStart(2, '0');
  const time = `${yyyy}-${MM}-${DD} ${hh}:${mm}:${ss}`;

  return time;
};

/** 生成随机数 */
// export const randomNum = (min, max) => {
//   return parseInt(Math.random() * (max - min + 1) + min, 10);
// };

export const randomNum = (min, max) => {
  let num = parseInt(Math.random() * (max - min + 1) + min, 10);
  while (num < min || num > max) {
    num = parseInt(Math.random() * (max - min + 1) + min, 10);
  }
  return num;
};



/** 获取图片名字 */
export const getFileName = (imgSrc) => {
  return imgSrc.substring(imgSrc.lastIndexOf('/') + 1, imgSrc.lastIndexOf('.'));
};

/** 获取图片类型 */
export const getFileFormat = (imgSrc) => {
  return imgSrc.substring(imgSrc.lastIndexOf('.')).toLowerCase();
};

/** 格式化时间戳 */
export const formattedDate = (timestamp) => {
  // 将时间戳转换为Date对象
  const date = new Date(timestamp * 1000);

  // 获取年份
  const year = date.getFullYear();
  // 获取月份，并在前面补0
  const month = (`0${date.getMonth() + 1}`).slice(-2);
  // 获取日期，并在前面补0
  const day = (`0${date.getDate()}`).slice(-2);
  // 获取小时，并在前面补0
  const hour = (`0${date.getHours()}`).slice(-2);
  // 获取分钟，并在前面补0
  const minute = (`0${date.getMinutes()}`).slice(-2);
  // 获取秒数，并在前面补0
  const second = (`0${date.getSeconds()}`).slice(-2);

  const result = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

  return result;
};


