import { Teacher, Lab } from "@/datasource/Type"

export function listTeacher(teacher: Teacher) {
    const teachers: Teacher[] = [];
    teachers.push(teacher);
    return teachers;
}

export function listLab() {
    const labs: Lab[] = [];
    return labs;
}