import copy from "copy-to-clipboard";

/** 复制指定文本到粘贴板 */
export const copyToClipboard = (text: string, options = {}) => {
  return copy(text, options);
};

/** 复制文本 */
// export const oldCopy = (value, cb) => {
//   // 动态创建 textarea 标签
//   const textarea = document.createElement("textarea");
//   // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域

//   textarea.readOnly = "readonly";
//   textarea.style.position = "absolute";
//   textarea.style.left = "-9999px";
//   // 将要 copy 的值赋给 textarea 标签的 value 属性
//   // 网上有些例子是赋值给innerText,这样也会赋值成功，但是识别不了\r\n的换行符，赋值给value属性就可以
//   textarea.value = value;
//   // 将 textarea 插入到 body 中
//   document.body.appendChild(textarea);
//   // 选中值并复制
//   textarea.select();
//   textarea.setSelectionRange(0, textarea.value.length);
//   document.execCommand("Copy");
//   document.body.removeChild(textarea);
//   if (cb && Object.prototype.toString.call(cb) === "[object Function]") {
//     cb();
//   }
// };

/** 生成指定长度字符串 */
export const randomString = (length: number) => {
  var chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz1234567890";
  // var strLen = chars.length;
  var randomStr = "";
  for (var i = 0; i < length; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return randomStr;
};

/** 根据传入字符生成随机长度字符串 */
export const randomStringType = (
  length: number,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
) => {
  let result = "";
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
  const DD = String(today.getDate()).padStart(2, "0");
  // 获取月份，1 月为 0
  const MM = String(today.getMonth() + 1).padStart(2, "0");
  // 获取年
  const yyyy = today.getFullYear();

  /** time */
  // 获取当前小时数(0-23)
  const hh = String(today.getHours()).padStart(2, "0");
  // 获取当前分钟数(0-59)
  const mm = String(today.getMinutes()).padStart(2, "0");
  // 获取当前秒数(0-59)
  const ss = String(today.getSeconds()).padStart(2, "0");
  const time = `${yyyy}-${MM}-${DD} ${hh}:${mm}:${ss}`;

  return time;
};

/** 生成随机数 */
// export const randomNum = (min, max) => {
//   return parseInt(Math.random() * (max - min + 1) + min, 10);
// };

export const randomNum = (min: number, max: number): number => {
  let num: number = Math.floor(Math.random() * (max - min + 1) + min);
  while (num < min || num > max) {
    num = Math.floor(Math.random() * (max - min + 1) + min);
  }
  return num;
};

/** 获取图片名字 */
export const getFileName = (imgSrc: string) => {
  return imgSrc.substring(imgSrc.lastIndexOf("/") + 1, imgSrc.lastIndexOf("."));
};

/** 获取图片类型 */
export const getFileFormat = (imgSrc: string) => {
  return imgSrc.substring(imgSrc.lastIndexOf(".")).toLowerCase();
};

/** 格式化时间戳 */
export const formattedDate = (timestamp: number): string => {
  // 将时间戳转换为Date对象
  const date: Date = new Date(timestamp * 1000);

  // 获取年份
  const year: number = date.getFullYear();
  // 获取月份，并在前面补0
  const month: string = `0${date.getMonth() + 1}`.slice(-2);
  // 获取日期，并在前面补0
  const day: string = `0${date.getDate()}`.slice(-2);
  // 获取小时，并在前面补0
  const hour: string = `0${date.getHours()}`.slice(-2);
  // 获取分钟，并在前面补0
  const minute: string = `0${date.getMinutes()}`.slice(-2);
  // 获取秒数，并在前面补0
  const second: string = `0${date.getSeconds()}`.slice(-2);

  const result: string = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

  return result;
};

