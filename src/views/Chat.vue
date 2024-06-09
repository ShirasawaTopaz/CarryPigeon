<template>
    <div class="ChatBackground">
        <el-row class="tac">
            <el-col :span="2">
                <el-menu :default-active="activeIndex" class="nav" @select="handleSelect">
                    <el-menu-item index="1">
                        <el-icon>
                            <location />
                        </el-icon>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <el-icon>
                            <icon-menu />
                        </el-icon>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <el-icon>
                            <document />
                        </el-icon>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <el-icon>
                            <setting />
                        </el-icon>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style lang="scss">
.ChatBackground {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
}

.tac{
    top: 0;
    left: 0;
    width: 9%;
    height: 100%;
}

.nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    text-color: white;
}

.el-icon {
    margin-left: 6px;
}
</style>