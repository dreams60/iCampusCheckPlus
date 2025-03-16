// 과목 클래스는 course_id와 name 만 기본적으로 받음.
// 이후 과제는 함수 내에서 자체 처리.
import {baseUrl} from "./Define";

class Course {
    name: string;
    id: string;
    constructor(id: string) {}
    getAssignment() {
        let course_url = baseUrl + "/courses/" + this.id;
        let module_url = course_url + "/modules";
        // GET 요청
    }
}