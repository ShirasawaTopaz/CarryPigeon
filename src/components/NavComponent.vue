<template>
    <div class="nav-div">
        <el-menu
            :default-active="index"
            class="nav"
            :collapse="true"
            :router="true"
        >
            <el-sub-item index="Chat">
                <el-icon>
                    <img
                        class="avatar"
                        src="https://avatars.githubusercontent.com/u/133548383?s=80&v=4"
                        alt=""
                    />
                </el-icon>
                <template #title>{{ username }}</template>
            </el-sub-item>
            <el-menu-item index="Chat">
                <el-icon>
                    <Comment />
                </el-icon>
                <template #title>Chat</template>
            </el-menu-item>
            <el-menu-item index="AddressBook">
                <el-icon>
                    <Collection />
                </el-icon>
                <template #title>AddressBook</template>
            </el-menu-item>
            <el-menu-item index="Setting">
                <el-icon>
                    <Setting />
                </el-icon>
                <template #title>Setting</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script lang="ts" setup>
import { Collection, Comment, Setting } from "@element-plus/icons-vue";
const props = defineProps({
    index: String,
    username: String,
});
props.index;
props.username;
</script>

<style lang="scss">
body {
    background-color: rgb(19, 19, 19);
}

.nav {
    left: 2px;
    width: 70px;
    height: 100vh;
    background-color: black;
}

.avatar {
    position: relative;
    left: 26px;
    margin-top: 70px;
    border-radius: 50%;
    width: 40px;
}
</style>
