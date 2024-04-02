const os = require('os');

setInterval(() => {
const { platform, arch, totalmem, freemem } = os;
const totalRam = totalmem() / 1024 / 1024;
const freeRam = freemem() / 1024 / 1024;
const usageRam = (freeRam / totalRam) * 100;

const stats = {
	OS: platform(),
	Arch: arch(),
	TotalRAM: parseInt(totalRam),
	FreeRAM: parseInt(freeRam),
	Usage: `${usageRam.toFixed(2)}%`
}
console.clear();
console.table(stats);
exports.stats = stats;
}, 1000)
