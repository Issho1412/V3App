export const APP_API_DOMAIN = "https://api-schdule.herokuapp.com/api";

/*Resquest 
{
    "username": ".....",
    "password": "....."
}*/
export const APP_API_LOGIN = "/getCookies";
/*Response 
{   
    "status": "200"
    "message": "success"
    "cookies":"JSESSIONID=E569A2E2BA06CEAF27FE1087F5F16F73"
}*/

/*Resquest 
{
    hocKyId = 57 <==> hk 2 starts 30/12/2019
    tuanHoc = 1  <==> 30/12/19 - 5/1/20 
    "cookie": "JSESSIONID=E569A2E2BA06CEAF27FE1087F5F16F73",
	"data": "hocKyId=57&&tuanHoc=1"
}*/
export const APP_APP_GET_SCHEDULES = "/getSchedule";
/*Response 
{
[
   {
        "name": "Giảng Viên: CN Trần Nam Long Tuần học:151617181920212223",
        "sectionLesson": "Tiết78910",
        "Place": "CV PHẦN MỀM QUANG TRUNG",
        "room": "Curie 1",
        "tranningCredit": "3.0",
        "LessonName": "Lập trình Java nâng cao",
        "class": "2TH132",
        "date": "Thứ 7"
    },
    {
        "name": "Giảng Viên: CN Trần Nam Long Tuần học:151617181920212223",
        "sectionLesson": "Tiết2345",
        "Place": "CV PHẦN MỀM QUANG TRUNG",
        "room": "Curie 1",
        "tranningCredit": "3.0",
        "LessonName": "Lập trình Java nâng cao",
        "class": "2TH132",
        "date": "Thứ 7"
    },
    {
        "name": "Giảng Viên: Th.S Lê Thị Lin Tuần học:101112131415",
        "sectionLesson": "Tiết2345",
        "Place": "CV PHẦN MỀM QUANG TRUNG",
        "room": "Curie 9",
        "tranningCredit": "2.0",
        "LessonName": "Kỹ năng phỏng vấn và tìm việc",
        "class": "2QT1084",
        "date": "Thứ 5"
    },
]
}*/

/*Resquest 
{
    hocKyId = 57 <==> hk 2 starts 30/12/2019
    tuanHoc = 1  <==> 30/12/19 - 5/1/20 
    "cookie": "JSESSIONID=E569A2E2BA06CEAF27FE1087F5F16F73",
	"data": "hocKyId=55"
}*/
export const APP_APP_GET_SCHEDULES_ALL = "/getScheduleAll";
/*Response 
{
    "studentinfo":"Huỳnh Quang Huy - MSSV: 1706020029 - Lớp : 11TH1C - Ngành : TIN HỌC ỨNG DỤNG",
    "StartSemesterDate":" 05/08/2019",
    "Schedule":[
        {
        "date":"Thứ 2",
        "class":"2TH116",
        "LessonName":"Lập trình Javascript nâng cao + Đồ án",
        "tranningCredit":"4.0",
        "room":"Curie 5",
        "Place":"CV PHẦN MỀM QUANG TRUNG",
        "sectionLesson":"Tiết23456",
        "name":"Giảng Viên: MBA Harsh Vardhan Tiwari Tuần học:910"
        },
        {
        "date":"Thứ 2",
        "class":"2CS1059",
        "LessonName":"Chính trị 2",
        "tranningCredit":"3.0",
        "room":"Hội Trường B",
        "Place":"CV PHẦN MỀM QUANG TRUNG",
        "sectionLesson":"Tiết2345",
        "name":"Giảng Viên: ThS Trần Thị Hồng Tuần học:678910111213141516"
        },
        {
        "date":"Thứ 2",
        "class":"2TH139",
        "LessonName":"Lập trình PHP, SQL Database",
        "tranningCredit":"3.0",
        "room":"Curie 5",
        "Place":"CV PHẦN MỀM QUANG TRUNG",
        "sectionLesson":"Tiết78910",
        "name":"Giảng Viên: CN Đinh Minh Hoà Tuần học:67891011121314151617181920"
        },
        {
        "date":"Thứ 2",
        "class":"2TH116",
        "LessonName":"Lập trình Javascript nâng cao + Đồ án",
        "tranningCredit":"4.0",
        "room":"Curie 5",
        "Place":"CV PHẦN MỀM QUANG TRUNG",
        "sectionLesson":"Tiết7891011",
        "name":"Giảng Viên: MBA Harsh Vardhan Tiwari Tuần học:910"
        },
        {
        "date":"Thứ 3",
        "class":"2TH116",
        "LessonName":"Lập trình Javascript nâng cao + Đồ án",
        "tranningCredit":"4.0",
        "room":"Curie 5",
        "Place":"CV PHẦN MỀM QUANG TRUNG",
        "sectionLesson":"Tiết23456",
        "name":"Giảng Viên: MBA Harsh Vardhan Tiwari Tuần học:910"
        },
        {
        "date":"Thứ 3",
        "class":"2CS0312",
        "LessonName":"Tin học văn phòng",
        "tranningCredit":"2.0",
        "room":"Hemingway 1",
        "Place":"CV PHẦN MỀM QUANG TRUNG",
        "sectionLesson":"Tiết2345",
        "name":"Giảng Viên: CN Trần Thanh Phong Tuần học:67891011121314151617181920"
        },
        {
        "date":"Thứ 3",
        "class":"2TH116",
        "LessonName":"Lập trình Javascript nâng cao + Đồ án",
        "tranningCredit":"4.0",
        "room":"Curie 5",
        "Place":"CV PHẦN MỀM QUANG TRUNG",
        "sectionLesson":"Tiết7891011",
        "name":"Giảng Viên: MBA Harsh Vardhan Tiwari Tuần học:9"
        },
        {
        "date":"Thứ 4",
        "class":"2TH116",
        "LessonName":"Lập trình Javascript nâng cao + Đồ án",
        "tranningCredit":"4.0",
        "room":"Curie 5",
        "Place":"CV PHẦN MỀM QUANG TRUNG",
        "sectionLesson":"Tiết23456",
        "name":"Giảng Viên: MBA Harsh Vardhan Tiwari Tuần học:9"
        },
        {
        "date":"Thứ 4",
        "class":"2TH116",
        "LessonName":"Lập trình Javascript nâng cao + Đồ án",
        "tranningCredit":"4.0",
        "room":"Curie 5",
        "Place":"CV PHẦN MỀM QUANG TRUNG",
        "sectionLesson":"Tiết7891011",
        "name":"Giảng Viên: MBA Harsh Vardhan Tiwari Tuần học:9"
        },
        {
        "date":"Thứ 5",
        "class":"2TH116",
        "LessonName":"Lập trình Javascript nâng cao + Đồ án",
        "tranningCredit":"4.0",
        "room":"Curie 5",
        "Place":"CV PHẦN MỀM QUANG TRUNG",
        "sectionLesson":"Tiết23456",
        "name":"Giảng Viên: MBA Harsh Vardhan Tiwari Tuần học:9"
        },
        {
        "date":"Thứ 5",
        "class":"2QT1084",
        "LessonName":"Kỹ năng phỏng vấn và tìm việc",
        "tranningCredit":"2.0",
        "room":"Curie 9",
        "Place":"CV PHẦN MỀM QUANG TRUNG",
        "sectionLesson":"Tiết2345",
        "name":"Giảng Viên: Th.S Lê Thị Lin Tuần học:101112131415"
        },
        {
        "date":"Thứ 5",
        "class":"2QT1084",
        "LessonName":"Kỹ năng phỏng vấn và tìm việc",
        "tranningCredit":"2.0",
        "room":"Curie 9",
        "Place":"CV PHẦN MỀM QUANG TRUNG",
        "sectionLesson":"Tiết23456",
        "name":"Giảng Viên: Th.S Lê Thị Lin Tuần học:16"
        },
        {
        "date":"Thứ 5",
        "class":"2TH116",
        "LessonName":"Lập trình Javascript nâng cao + Đồ án",
        "tranningCredit":"4.0",
        "room":"Curie 5",
        "Place":"CV PHẦN MỀM QUANG TRUNG",
        "sectionLesson":"Tiết7891011",
        "name":"Giảng Viên: MBA Harsh Vardhan Tiwari Tuần học:9"
        },
        {
        "date":"Thứ 6",
        "class":"2TH116",
        "LessonName":"Lập trình Javascript nâng cao + Đồ án",
        "tranningCredit":"4.0",
        "room":"Curie 5",
        "Place":"CV PHẦN MỀM QUANG TRUNG",
        "sectionLesson":"Tiết23456",
        "name":"Giảng Viên: MBA Harsh Vardhan Tiwari Tuần học:9"
        },
        {
        "date":"Thứ 6",
        "class":"2TH116",
        "LessonName":"Lập trình Javascript nâng cao + Đồ án",
        "tranningCredit":"4.0",
        "room":"Curie 5",
        "Place":"CV PHẦN MỀM QUANG TRUNG",
        "sectionLesson":"Tiết7891011",
        "name":"Giảng Viên: MBA Harsh Vardhan Tiwari Tuần học:9"
        },
        {
        "date":"Thứ 7",
        "class":"2TH116",
        "LessonName":"Lập trình Javascript nâng cao + Đồ án",
        "tranningCredit":"4.0",
        "room":"Curie 5",
        "Place":"CV PHẦN MỀM QUANG TRUNG",
        "sectionLesson":"Tiết23456",
        "name":"Giảng Viên: MBA Harsh Vardhan Tiwari Tuần học:9"
        },
        {
        "date":"Thứ 7",
        "class":"2TH132",
        "LessonName":"Lập trình Java nâng cao",
        "tranningCredit":"3.0",
        "room":"Curie 1",
        "Place":"CV PHẦN MỀM QUANG TRUNG",
        "sectionLesson":"Tiết2345",
        "name":"Giảng Viên: CN Trần Nam Long Tuần học:151617181920212223"
        },
        {
        "date":"Thứ 7",
        "class":"2TH132",
        "LessonName":"Lập trình Java nâng cao",
        "tranningCredit":"3.0",
        "room":"Curie 1",
        "Place":"CV PHẦN MỀM QUANG TRUNG",
        "sectionLesson":"Tiết78910",
        "name":"Giảng Viên: CN Trần Nam Long Tuần học:151617181920212223"
        },
        {
        "date":"Thứ 7",
        "class":"2TH116",
        "LessonName":"Lập trình Javascript nâng cao + Đồ án",
        "tranningCredit":"4.0",
        "room":"Curie 5",
        "Place":"CV PHẦN MỀM QUANG TRUNG",
        "sectionLesson":"Tiết7891011",
        "name":"Giảng Viên: MBA Harsh Vardhan Tiwari Tuần học:9"
        }
    ]
}*/

/*Resquest 
{
    
}*/
export const APP_APP_GET_POSITION_ROOM = "/getPositionByRoom/";
/*
{
    "id": 1,
    "class_name": "E8",
    "lon": "10.8519049",
    "lat": "106.6281961",
    "vali_metter": 6,
    "date_create": "2020-05-31T07:35:49.828Z",
    "date_update": null
}
*/

/*Resquest 
{
    "code": "1706020029",
	"name": "Huynh Quang Huy",
	"className": "11THC",
	"section": "7-10",
	"major": "CNTT"
}*/
export const APP_APP_CREATE_STUDENT = '/CreateStudent';
/*Response
    "status": "200",
    "message": "success"
*/