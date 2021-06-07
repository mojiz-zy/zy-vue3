export interface Teacher {
    name: string;
    title: string;
    number: string;
    id?:string;
}

export interface Lab{
    number : string; //实验室编号
    computerNumber: string;// 实验室机器数量
    schedule : Schedule[];//实验室课程表
}
export interface Schedule{
    course?: Course; //课程
    week ?: string;  //第几周
    day ?: string;   //星期几
    order ?: string; //哪节课（每天5节课）
    state : boolean;//是否被占用
}

export interface Course{
    name: string;       //课程名称
    teacherNum: string; //教师编号
    id?: string;
}


