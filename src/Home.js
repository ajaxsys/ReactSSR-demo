import React, { useState, useEffect } from 'react';
import { fetchMockData } from '../mockData'; // 导入 mock 数据函数

function Home({serverData}) {
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(serverData || null);

  useEffect(() => {
    console.log("serverData", serverData)
    if (!serverData || !serverData.message) {
      // 为什么这里也需要一次fetch？
      // 目的是为了防止服务器SSR获取出错（如缓存击穿就放弃获取）的异常情况，客户端进行一个补偿容错机制
      // SSR服务器往往是从内网获取数据，
      // 而CSR是从公网获取数据
      // 两者走的网络甚至服务器都有可能不一样。
      // 根据具体的业务逻辑可以设计让系统更加强健，如果服务器获取失败，客户端可以获取一个别的版本的数据
      fetchMockData()
        .then(data => {
          data.message = data.message + "(From CSR)";
          setData(data);
        })
        .catch(err => console.error('Mock fetch failed:', err));
    }
  }, [serverData]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Data: {JSON.stringify(data)}</p>
      <button onClick={() => setClicked(!clicked)}>
        {clicked ? 'Clicked!' : 'Click me'}
      </button>
    </div>
  );
}

export default Home;
