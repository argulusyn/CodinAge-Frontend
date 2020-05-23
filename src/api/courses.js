import client from "@/api/client.js";

const createCourse = courseData => client.post("courses/create", courseData);

const getCourseById = courseId => client.get(`courses/${courseId}`);

const updateCourse = (courseId, courseData) =>
  client.patch(`courses/${courseId}`, courseData);

const getCourses = () => client.get("courses");

const deleteCourseById = courseId => client.delete(`courses/${courseId}`);

export {
  createCourse,
  getCourseById,
  updateCourse,
  getCourses,
  deleteCourseById
};
