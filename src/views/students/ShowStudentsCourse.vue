<template>
  <div>
    <h4>Alunos inscritos no curso: {{ course?.title }}</h4>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Data da Inscrição</th>
          <th>Email</th>
          <th>Status</th>
          <th>Valor Pago</th>
          <th>Ações</th>
          <!-- Outros campos que você deseja exibir -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ formatDate(student.created_at) }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.status === 1 ? 'Pago' : 'cancelado' }}</td>
          <td>R$ {{ course.price }}</td>
          <td>
            <router-link :to="`/students/${student.id}/edit`" class="btn btn-warning btn-sm"><font-awesome-icon icon="pencil" /></router-link>
            <button @click="deleteUser(student.id)" class="btn btn-danger btn-sm ml-2">
              <font-awesome-icon icon="trash" />
            </button>
          </td>
          <!-- Outros dados do aluno -->
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
      course: null,
      students: [],
    };
  },
  methods: {
    fetchStudents() {
      // Captura o courseId dos parâmetros da rota
      const courseId = this.$route.params.courseId;

      axios.get(`http://localhost:8000/api/courses/${courseId}/students`)
        .then(response => {
          this.students = response.data.students;
          this.course = response.data.course;
        })
        .catch(error => {
          console.error('Erro ao buscar alunos:', error);
        });
    },
    deleteUser(userId) {
      if (confirm('Tem certeza que deseja excluir este usuário?')) {
        axios.delete(`http://localhost:8000/api/users/${userId}`)
          .then(() => {
            this.fetchUsers();
          })
          .catch(error => {
            console.error('Erro ao excluir usuário:', error);
          });
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return new Date(date).toLocaleDateString('pt-BR', options);
    },
  },
  mounted() {
     console.log(this.$route.params.courseId);
    this.fetchStudents();
  },
};
</script>
