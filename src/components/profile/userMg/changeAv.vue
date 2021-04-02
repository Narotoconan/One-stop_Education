<template>
    <div>
        <div id="toAvatar" @click="dialogUploadAvVisible= true">
            <div>修改头像</div>
        </div>
        <el-dialog title="头像修改" :visible.sync="dialogUploadAvVisible" width="55rem" :lock-scroll="false"
                   :close-on-click-modal="false">
            <div class="mb-3" style="text-align: left">
                <div class="upload">
                    <label for="inputFile">
                        <el-tag type="success" effect="dark" @click="toCropper">上传图片</el-tag>
                    </label>
                    <input type="file" id="inputFile" hidden>
                </div>
                <div class="uploadBox">
                    <div class="cutPart">
                        <img src="" alt="" id="userAvatar">
                    </div>
                    <div class="previewPart">
                        <div class="preview"></div>
                    </div>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogUploadAvVisible = false">取 消</el-button>
                <el-button type="warning" id="toUpload" @click="toBolb">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import $ from 'jquery'
    import Cropper from 'cropperjs'
    import router from "../../../router";

    export default {
        name: "changeAv",
        data() {
            return {
                dialogUploadAvVisible: false,
                dialogImageUrl: '',
                dialogVisible: false,
                cropper: null,
                showImg: String,
                avatarBlob: null
            }
        },
        methods: {
            toCropper() {
                const userAvatar = $("#userAvatar")[0];
                this.cropper = new Cropper(userAvatar, {
                    aspectRatio: 2 / 2,
                    viewMode: 2,
                    preview: '.preview'
                })
                let vm = this
                const inputFile = document.getElementById("inputFile");

                inputFile.addEventListener('change', function () {
                    const file = this.files[0];
                    const reader = new FileReader();
                    // 监听reader对象的的onload事件，当图片加载完成时，把base64编码賦值给预览图片
                    reader.addEventListener("load", function () {
                        vm.showImg = reader.result;
                        vm.cropper.replace(vm.showImg, false)
                    }, false);
                    // 调用reader.readAsDataURL()方法，把图片转成base64
                    reader.readAsDataURL(file);

                }, false);
            },
            toBolb(){
                const cas = this.cropper.getCroppedCanvas({
                    width: 100 *3,
                    height: 100 *3
                });
                let vm =this
                cas.toBlob(function (e) {
                    vm.changeAvatar(e) //生成Blob的图片格式
                });
            },
            changeAvatar(avatarBlob) {
                const formData = new FormData()
                console.log(avatarBlob);
                formData.append('userAvatar',avatarBlob)
                this.$store.dispatch('putUserAvatar',
                    formData
                ).then(res => {
                    if (res.resultCode !== 1160) { //判断业务状态码
                        this.$message.warning(res.resultCode + ' ' + res.message)
                        return
                    }
                    this.$message.success('修改成功')
                    this.cropper.destroy()
                    this.dialogUploadAvVisible = false
                    this.getUserMg()
                    setTimeout(function () {
                        router.go(0) //刷新
                    }, 1000);
                }).catch(err => {
                    this.$message.error('修改头像失败')
                    console.log(err)
                })
            },
            getUserMg(){
                this.$store.dispatch('getUserMg', this.$store.getters.getMessage.uid)
                    .then(res => {
                        if (res.resultCode !== 1140) { //判断业务状态码
                            this.$message.warning(res.resultCode + ' ' + res.message);
                            return;
                        }
                        localStorage.setItem("user", JSON.stringify(res.data.userDetails));
                    }).catch(err => {
                    this.$message.error('获取用户信息失败')
                    console.log(err)
                })
            }
        }
    }
</script>

<style lang="less">
    @import "~cropperjs/dist/cropper.min.css";
</style>
