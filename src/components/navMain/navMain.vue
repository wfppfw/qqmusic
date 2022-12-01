<template>
    <div>
        <div v-for="(item,index) in list" :key="index">
            <div class="item">
                <input type="checkbox" v-model="item.complete">
                {{item.title}}
                <button @click="del(item,index)">删除</button>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        defineComponent,
        ref
    } from 'vue';
    export default defineComponent({
        name: 'navMian',
        setup() {
            let list = ref([{
                    title: '吃饭',
                    complete: false
                },
                {
                    title: '睡觉',
                    complete: false
                },
                {
                    title: '喝水',
                    complete: false
                },

            ])
            let enter = () => {
                console.log(value.value)
            }
            let del = (item, index) => {
                console.log(item, index)
            }
            return {
                list,
                del
            }
        }
    })
</script>
<style scoped lang="scss">
    .item {
        height: 35px;
        line-height: 35px;
        position: relative;
        left: -53px;

        // w  idth: 160px;
        button {
            position: absolute;
            right: 220px;
            display: none;
            top: 6px;
            z-index: 99;
        }

        &:hover {
            button {
                display: block;
            }
        }
    }
</style>