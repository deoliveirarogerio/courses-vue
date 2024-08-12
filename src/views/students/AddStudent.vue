<template>
  <div>
    <h1>Adicionar Aluno</h1>
    <form @submit.prevent="addStudent">
      <div class="mb-3">
        <label for="name" class="form-label">Nome</label>
        <input type="text" v-model="student.name" class="form-control" id="name" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">E-mail</label>
        <input type="email" v-model="student.email" class="form-control" id="email" required>
      </div>
      <div class="mb-3 col-md-4">
        <label for="status" class="form-label">Status</label>
        <select v-model="student.status" class="form-select" id="status" required>
          <option value="" disabled>Escolha uma opção</option>
          <option value="1">Sim</option>
          <option value="0">Não</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Adicionar Aluno</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  name: 'AddStudent',
  setup() {
    const student = ref({
      name: '',
      email: '',
      status: '',  // Initialize as an empty string to handle the default disabled option
    });

    const addStudent = async () => {
      try {
        // Ensure status is not an empty string before sending
        if (student.value.status === '') {
          alert('Por favor, selecione o status.');
          return;
        }

        // Make the API call to add the student
        await axios.post('http://localhost:8000/api/students', student.value);
        alert('Aluno adicionado com sucesso!');
        
        // Reset the form after successful submission
        student.value = {
          name: '',
          email: '',
          status: ''  // Reset status to empty string
        };
      } catch (error) {
        console.error('Erro ao adicionar aluno:', error);
      }
    };

    return {
      student,
      addStudent,
    };
  },
};
</script>

<style scoped>
/* Estilos específicos do componente */
</style>
