<template>
    <div class="nav-div">
        <el-menu default-active="Chat" class="nav" :collapse=true :router=true>
            <el-sub-item index="1">
                <el-icon>
                    <el-avater class="avater" size="10" fit="fill">
                        <img src="https://avatars.githubusercontent.com/u/133548383?s=80&v=4"/>
                    </el-avater>
                </el-icon>
                <template #title>Navigator One</template>
            </el-sub-item>
            <el-menu-item index="Chat">
                <el-icon>
                    <icon-menu />
                </el-icon>
                <template #title>Navigator Two</template>
            </el-menu-item>
            <el-menu-item index="AddressBook">
                <el-icon>
                    <document />
                </el-icon>
                <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="Setting">
                <el-icon>
                    <setting />
                </el-icon>
                <template #title>Navigator Four</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Setting,
} from '@element-plus/icons-vue'
</script>

<style lang="scss">
.nav {
    left: 2px;
    width: 85px;
    background-color: black;
}
.avater {
    position: relative;
    left: 33px;
    margin-top: 70px;
}
</style>