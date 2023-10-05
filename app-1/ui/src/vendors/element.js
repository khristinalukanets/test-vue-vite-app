import {
	ElButton,
	ElNotification
} from "element-plus";
import "@/assets/scss/element/index.scss";

export default app => {
	app.use(ElButton);
	app.use(ElNotification);

	// Global element-plus config. For now this object has two properties: size and zIndex
	app.config.globalProperties.$ELEMENT = { zIndex: 2002 };
};
