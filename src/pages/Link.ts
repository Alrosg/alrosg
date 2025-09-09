/**
 * 友情链接数据配置文件
 * 此文件用于集中管理博客的所有友情链接数据，实现数据与表现分离
 * @module PageData/Link
 * @author 你的名字
 * @version 1.0.0
 * @license MIT
 */

// 定义一个友链对象的类型接口，确保数据格式规范
interface FriendLink {
	name: string; // 站点名称
	link: string; // 站点完整URL
	avatar: string; // 站点头像/Logo的绝对或相对路径
	descr: string; // 站点简短描述
	tags?: string[]; // 站点标签/分类（可选）
}

// 导出默认配置
export default {
	/**
	 * 远程API配置（通常留空，使用本地数据）
	 * 如果后续想从接口动态获取友链，可在此配置API地址
	 * API返回的数据结构需与下方的 data 数组保持一致
	 */
	api: "",

	/**
	 * 本地静态友链数据
	 * 在此数组中添加、修改或删除你的友情链接对象
	 * 建议按某种逻辑排序（如拼音首字母），但最终显示顺序由页面组件中的 shuffleArray 函数决定（随机）
	 */
	data: [
		{
			name: "Mizuki 主题文档",
			link: "https://docs.mizuki.mysqil.com",
			avatar:
				"http://q.qlogo.cn/headimg_dl?dst_uin=3231515355&spec=640&img_type=jpg",
			descr: "Mizuki User Manual",
			tags: ["Docs", "Theme"],
		},
		// ——————————————————————————————————
		// 【以下是你可以添加的新友链示例】
		// ——————————————————————————————————
		{
			name: "落樱🌸残風的小破站", // 站点名
			link: "https://www.lycf.club/", // 站点链接
			avatar: "https://q.qlogo.cn/headimg_dl?dst_uin=3205440676&spec=640&img_type=jpg", // logo URL
			descr: "生命不息，折腾不止！", // 描述
			tags: [""], // 标签
		},
		{
			name: "逆光源的网站",
			link: "https://www.nghbl.vip/",
			avatar: "https://q.qlogo.cn/headimg_dl?dst_uin=3903224133&spec=640&img_type=jpg",
			descr: "助理每一位破解人的梦想！",
			tags: [""],
		},
		{
			name: "ɪ ʟɪᴋᴇ ʏᴏᴜ的小屋", // 示例：可添加和你一样的搞机同好
			link: "https://900.cool/ce/index.html",
			avatar: "https://q.qlogo.cn/headimg_dl?dst_uin=3572558040&spec=640&img_type=jpg",
			descr: "让破解学习机「触手可及」",
			tags: [""], // 标签可以根据你的兴趣领域设置
		},
		{
			name: "小特网",
			link: "https://xiaote.data.blog/",
			avatar: "https://q.qlogo.cn/headimg_dl?dst_uin=3547128313&spec=640&img_type=jpg",
			descr: "xt的应用库",
			tags: [""],
		},
		// 你可以继续按此格式添加更多友链...
	] as FriendLink[], // 类型断言，确保data数组符合FriendLink接口的约束
};
