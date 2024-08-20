export const fetchMockData = () => {
  return new Promise((resolve) => {
    // 模拟网络延迟
    setTimeout(() => {
      // 返回模拟数据
      resolve({ message: 'This is mock data from the API.' });
    }, 1000); // 1秒延迟
  });
};