<script>
import { defineComponent } from "vue";
import { ElNotification } from "element-plus"; // so I am importing this lib here

export default defineComponent({
	name: "AppButton",
	props: {
		text: {
			type: String,
			default: "Ok"
		}
	},
	setup() {
		const handleClick = () => {
			console.log('test');
			ElNotification({
				title: "Application is not optimised for the current resolution",
				message: "For better experience, open the application on a larger screen.",
				duration: 0
			});
		}

		return {
			handleClick
		}
	}
});
</script>

<template>
	<el-button @click="handleClick">
		{{ text }}
	</el-button>
</template>

<style lang="scss" scoped>

</style>
