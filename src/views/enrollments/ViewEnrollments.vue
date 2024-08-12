<template>
  <div>
    <h1>Lista de Inscrições</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome do Aluno</th>
          <th>Curso</th>
          <th>Status</th>
          <th>Data da Inscrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="enrollment in enrollments" :key="enrollment.id">
          <td>{{ enrollment.id }}</td>
          <td>{{ enrollment.student.name }}</td>
          <td>{{ enrollment.course.title }}</td>
          <td>{{ enrollment.status === 1 ? 'Ativo' : 'Inativo' }}</td>
          <td>{{ formatDate(enrollment.created_at) }}</td>
          <td class="d-flex flex-row">
            <button @click="viewDetails(enrollment.id)" class="btn btn-info btn-sm"><font-awesome-icon icon="eye" /></button>
            <button @click="editEnrollment(enrollment.id)" class="btn btn-primary btn-sm ml-2"><font-awesome-icon icon="pencil" /></button>
            <button @click="deleteEnrollment(enrollment.id)" class="btn btn-danger btn-sm ml-2"><font-awesome-icon icon="trash" /></button>
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
      enrollments: [],
    };
  },
  methods: {
    fetchEnrollments() {
      axios.get('http://localhost:8000/api/enrollments')
        .then(response => {
          console.log(response.data);
          this.enrollments = response.data;
        })
        .catch(error => {
          console.error('Erro ao buscar inscrições:', error);
        });
    },
    viewDetails(enrollmentId) {
      // Implementar lógica de visualização de detalhes aqui
      alert(`Visualizar detalhes da inscrição ID: ${enrollmentId}`);
    },
    editEnrollment(enrollmentId) {
      // Implementar lógica de edição de inscrição aqui
      alert(`Editar inscrição ID: ${enrollmentId}`);
    },
    deleteEnrollment(enrollmentId) {
      if (confirm('Tem certeza que deseja excluir esta inscrição?')) {
        axios.delete(`http://localhost:8000/api/enrollments/${enrollmentId}`)
          .then(() => {
            this.fetchEnrollments(); // Atualiza a lista após exclusão
          })
          .catch(error => {
            console.error('Erro ao excluir inscrição:', error);
          });
      }
    },
    formatDate(date) {
       const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('pt-BR', options);
    },
  },
  mounted() {
    this.fetchEnrollments();
  },
};
</script>

<style scoped>
/* Estilos específicos para o componente Enrollments */
</style>
