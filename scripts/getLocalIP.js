const os = require('os');

// 获取网络接口
const networkInterfaces = os.networkInterfaces();

// 遍历网络接口
for (const interfaceName in networkInterfaces) {
    const interface = networkInterfaces[interfaceName];
    for (const alias of interface) {
        if (alias.family === 'IPv4' && !alias.internal) {
            console.log('key&&&&&',alias)
            console.log(`本机的 IPv4 地址是：${alias.address}`);
        }
    }
}
