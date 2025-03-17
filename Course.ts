// 과목 클래스는 course_id와 name 만 기본적으로 받음.
// 이후 과제는 함수 내에서 자체 처리.
import {baseUrl} from "./Define";
import axios from "axios";

class Course {
    private name: string;
    private id: string;
    private items: object;
    constructor(id: string) {}
    getItems(data:object) {

    }
    async getModules() {
        let course_url = baseUrl + "/courses/" + this.id;
        let module_url = course_url + "/modules";
        // GET 요청
        const response = await axios.get(module_url);
        const modules: object[] = response.data;
        for (let module of modules) {
            if (module.hasOwnProperty("items_count") && module.items_count! > 0) {
                this.getItems(module);
            }
        }
    }

}