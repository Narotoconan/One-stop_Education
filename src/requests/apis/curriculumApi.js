import http from '../http'
import curriculumList from "../../store/modules/curriculumList";

export default {
    randomCurriculum: count => http.get('/course/query/',count),        //随机取课程
    teacherMessage: teacherId => http.get(/teacher/,teacherId),         //获取老师信息
    getCurriculum: category => http.get('/course/query/',category),      //获取课程
    getCurriculumVideo: curriculumId => http.get('/video/query/',curriculumId), //获取课程视频列表
    getVideo: video => http.get('/video/play/',video), //获取视频
    addFavoriteCur: curriculumId => http.post('/user/favorite/add',curriculumId), //添加收藏
    adelFavoriteCur: curriculumId => http.post('/user/favorite/del',curriculumId), //取消收藏
    isFavoriteCur: curriculumId => http.get('/user/favorite/check/',curriculumId) //是否收藏
}
