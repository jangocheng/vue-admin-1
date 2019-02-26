<style scoped lang="less">
</style>
<template>
    <div class="index">
        <Row type="flex" justify="left" align="top">
            <Col span="12">
                <Card :bordered="false" style="margin-right: 8px;height: 350px;">
                    <p slot="title">系统信息</p>
                    <div>
                        <div>后台名称：InitAdmin后台</div>
                        <div>客户端框架：vue-admin v0.1.0</div>
                        <div>服务端框架：actionphp v0.1.0</div>
                        <div>PHP版本：7.0</div>
                        <div>数据库版本：Mysql5.7</div>
                    </div>
                </Card>
            </Col>
            <Col span="12">
                <Card :bordered="false" style="margin-left: 8px;height: 350px;">
                    <p slot="title">交流群</p>
                    <div>
                        <img style="width: 200px;margin-right: 10px;" src="@/assets/qun_qq.png">
                        <img style="width: 200px;" src="@/assets/qun_weixin.jpg">
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        created: function () {
        },
        methods: {
        }
    }
</script>
