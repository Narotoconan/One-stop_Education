<template>
    <div class="listBorder">
        <div class="container h-100 position-relative">
            <ul class="catalogList flex-column">
                <li>
                    <list-item :itemData="itemData1"/>
                </li>
                <li>
                    <list-item :itemData="itemData2"/>
                </li>
                <li>
                    <list-item :itemData="itemData3"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import listItem from "./listItem";
    import $ from "jquery";

    export default {
        name: "curriculumCatalog",
        components: {
            listItem
        },
        data() {
            return {
                itemData1: {
                    name: '编程学习',
                    photo: require('../../../assets/img/code.png'),
                    curriculum: [
                        {
                            curriculumName: 'HTML5',
                            curriculumPhoto: require('../../../assets/img/curriculum/code/html5.png'),
                            description: '互联网的下一代语言标准',
                            path:'category/program',
                            cur:'34'
                        },
                        {
                            curriculumName: 'Java',
                            curriculumPhoto: require('../../../assets/img/curriculum/code/java.png'),
                            description: '稳坐市场占有率第一的宝座',
                            path:'category/program',
                            cur:'31'
                        },
                        {
                            curriculumName: 'Python',
                            curriculumPhoto: require('../../../assets/img/curriculum/code/python.png'),
                            description: '大量用户欢迎、用途广泛',
                            path:'category/program',
                            cur:'33'
                        },
                        {
                            curriculumName: 'C语言',
                            curriculumPhoto: require('../../../assets/img/curriculum/code/c.png'),
                            description: '面向过程的的通用程序语言',
                            path:'category/program',
                            cur:'32'
                        }
                    ]
                },
                itemData2: {
                    name: '数学学习',
                    photo: require('../../../assets/img/math.png'),
                    curriculum: [
                        {
                            curriculumName: '高考数学',
                            curriculumPhoto: require('../../../assets/img/curriculum/math/gaokaoshu.png'),
                            description: '普通高等学校招生全国数学考试',
                            path:'category/math',
                            cur:'11'
                        },
                        {
                            curriculumName: '高等数学',
                            curriculumPhoto: require('../../../assets/img/curriculum/math/gaoshu.png'),
                            description: '研究生入学统考“数学”',
                            path:'category/math',
                            cur:'12'
                        },
                        {
                            curriculumName: '线性代数',
                            curriculumPhoto: require('../../../assets/img/curriculum/math/xiandai.png'),
                            description: '应用于自然科学和社会科学中',
                            path:'category/math',
                            cur:'13'
                        },
                        {
                            curriculumName: '概率论',
                            curriculumPhoto: require('../../../assets/img/curriculum/math/gailv.png'),
                            description: '研究随机现象规律的数学分支',
                            path:'category/math',
                            cur:'14'
                        }
                    ]
                },
                itemData3: {
                    name: '英语学习',
                    photo: require('../../../assets/img/english.png'),
                    curriculum: [
                        {
                            curriculumName: '高考英语',
                            curriculumPhoto: require('../../../assets/img/curriculum/english/gaokaoying.png'),
                            description: '普通高等学校招生全国英语考试',
                            path:'category/english',
                            cur:'21'
                        },
                        {
                            curriculumName: '考研英语',
                            curriculumPhoto: require('../../../assets/img/curriculum/english/kaoyanying.png'),
                            description: '研究生入学统考“英语”',
                            path:'category/english',
                            cur:'22'
                        },
                        {
                            curriculumName: '英语四级',
                            curriculumPhoto: require('../../../assets/img/curriculum/english/cet4.png'),
                            description: '全国大学生英语四级考试',
                            path:'category/english',
                            cur:'23'
                        },
                        {
                            curriculumName: '英语六级',
                            curriculumPhoto: require('../../../assets/img/curriculum/english/cet6.png'),
                            description: '全国大学生英六级考试',
                            path:'category/english',
                            cur:'24'
                        }
                    ]
                }
            }
        },
        mounted() {
            this.content();
            this.contentShow()
        },
        methods: {
            content() {
                let h = $(".catalogList li").height();
                let ph = $(".listItem").position().top;
                $(".catalogList li:nth-of-type(1) .listContentBorder").css({"top": 0-ph});
                $(".catalogList li:nth-of-type(2) .listContentBorder").css({"top": -h-ph});
                $(".catalogList li:nth-of-type(3) .listContentBorder").css({"top": (-2 * h)-ph})
            },
            contentShow(){
                $(".catalogList li").on("mouseenter",function () {
                    let target= $(this);
                    window.temp=setTimeout(function () {
                        target.find(".listContentBorder").stop().fadeIn(250);
                    }, 250);
                }).on("mouseleave",function (){
                    let target= $(this);
                    target.find(".listContentBorder").stop().fadeOut(250);
                    clearTimeout(temp);
                });
            }
        }
    };

</script>

<style scoped>

</style>
