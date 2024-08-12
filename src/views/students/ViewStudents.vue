<template>
  <div>
    <h4>Lista de Alunos</h4>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.email }}</td>
          <td>
            <!-- <router-link :to="`/students/${student.id}/details`" class="btn btn-info btn-sm">
              <font-awesome-icon icon="eye" />
            </router-link> -->
            <router-link :to="`/students/${student.id}/edit`" class="btn btn-warning btn-sm">
              <font-awesome-icon icon="pencil" />
            </router-link>
            <button @click="deleteStudent(student.id)" class="btn btn-danger btn-sm ml-2">
              <font-awesome-icon icon="trash" />
            </button>
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
      students: [],
    };
  },
  methods: {
    fetchStudents() {
      axios.get('http://localhost:8000/api/students')
        .then(response => {
          console.log(response.data);
          this.students = response.data;
        })
        .catch(error => {
          console.error('Erro ao buscar estudantes:', error);
        });
    },
    editStudent(studentId) {
      // Implementar lógica de edição aqui
      alert(`Editar estudante ID: ${studentId}`);
    },
    deleteStudent(studentId) {
      if (confirm('Tem certeza que deseja excluir este estudante?')) {
        axios.delete(`http://localhost:8000/api/students/${studentId}`)
          .then(() => {
            this.fetchStudents(); // Atualiza a lista após exclusão
          })
          .catch(error => {
            console.error('Erro ao excluir estudante:', error);
          });
      }
    },
  },
  mounted() {
    this.fetchStudents();
  },
};
</script>

<style scoped>
/* Estilos específicos para o componente ViewStudents */
</style>
