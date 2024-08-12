<template>
  <div>
    <h1>Lista de Cursos</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Ativo</th>
          <th>Período de Insc.</th>
          <th>Vagas Restantes</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" :key="course.id">
          <td>{{ course.id }}</td>
          <td>{{ course.title }}</td>
          <td>{{ course.description }}</td>
          <td class="text-center">R$ {{ course.price }}</td>
          <td class="text-center">{{ course.status === 1 ? 'Sim' : 'Não' }}</td>
          <td>{{ formatDate(course.registration_start) }} - {{ formatDate(course.registration_end) }}</td>
          <td class="text-center">{{ course.remaining_slots }}</td>
          <td>
            <router-link :to="`/courses/${course.id}/students`" class="btn btn-info btn-sm">
              <font-awesome-icon icon="eye" />
            </router-link>
            <router-link :to="`/courses/${course.id}/edit`" class="btn btn-warning btn-sm ml-2"><font-awesome-icon icon="pencil" /></router-link>
            <button @click="deleteCourse(course.id)" class="btn btn-danger btn-sm ml-2"><font-awesome-icon icon="trash" /></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      courses: [],
    };
  },
  methods: {
    fetchCourses() {
      axios.get('http://localhost:8000/api/courses')
        .then(response => {
          this.courses = response.data;
        })
        .catch(error => {
          console.error('Erro ao buscar cursos:', error);
        });
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('pt-BR');
    },
    deleteCourse(courseId) {
      if (confirm('Tem certeza que deseja excluir este curso?')) {
        axios.delete(`http://localhost:8000/api/courses/${courseId}`)
          .then(() => {
            this.fetchCourses();
          })
          .catch(error => {
            console.error('Erro ao excluir curso:', error);
          });
      }
    },
  },
  mounted() {
    this.fetchCourses();
  },
};
</script>

<style scoped>
/* Estilos específicos para o componente ViewCourses */
</style>
