import { createRouter, createWebHistory } from 'vue-router'

import AdminCourses from '../views/AdminCourses.vue'
import ViewCourses from '../views/courses/ViewCourses.vue'
import AddCourse from '../views/courses/AddCourse.vue'
import EditCourse from '../views/courses/EditCourse.vue'
import ViewStudents from '../views/students/ViewStudents.vue'
import AddStudent from '../views/students/AddStudent.vue'
import EditStudent from '../views/students/EditStudent.vue'
import ShowStudentsCourse from '../views/students/ShowStudentsCourse.vue'
import ViewEnrollments from '../views/enrollments/ViewEnrollments.vue'
import ViewUsers from '../views/users/ViewUsers.vue'
import AddUser from '../views/users/AddUser.vue'
import EditUser from '../views/users/EditUser.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    component: AdminCourses,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/ViewHome.vue'),
      },
      {
        path: 'courses',
        name: 'ViewCourses',
        component: ViewCourses,
      },
      {
        path: '/courses/add',
        name: 'AddCourse',
        component: AddCourse,
      },
      {
        path: '/courses/:courseId/edit',
        name: 'EditCourse',
        component: EditCourse,
        props: true,
      },
      {
        path: 'students',
        name: 'ViewStudents',
        component: ViewStudents,
      },
      {
        path: '/students/:studentId/edit',
        name: 'EditStudent',
        component: EditStudent,
        props: true,
      },
      {
        path: 'enrollments',
        name: 'ViewEnrollments',
        component: ViewEnrollments,
      },
      {
        path: '/students/add',
        name: 'AddStudent',
        component: AddStudent,
      },
      {
        path: 'users',
        name: 'ViewUsers',
        component: ViewUsers,
      },
      {
        path: '/users/add',
        name: 'AddUser',
        component: AddUser,
      },
      {
        path: '/users/:userId/edit',
        name: 'EditUser',
        component: EditUser,
        props: true,
      },
      {
        path: '/courses/:courseId/students',
        name: 'ShowStudentsCourse',
        component: ShowStudentsCourse,
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
      },
    ],
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;