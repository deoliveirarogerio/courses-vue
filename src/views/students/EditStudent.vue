<template>
  <div>
    <h1>Editar Aluno</h1>
    <form @submit.prevent="updateStudent">
      <div class="mb-3">
        <label for="name" class="form-label">Nome</label>
        <input type="text" v-model="student.name" class="form-control" id="name" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">E-mail</label>
        <input type="email" v-model="student.email" class="form-control" id="email" required>
      </div>
      <div class="mb-3 col-md-4">
        <label for="status" class="form-label">Ativo</label>
        <select v-model="student.status" class="form-select" id="status" required>
          <option value="1" :selected="student.status == 1">Sim</option>
          <option value="0" :selected="student.status == 0">Não</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Salvar Alterações</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
  name: 'EditStudent',
  props: {
    studentId: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const student = ref({
      name: '',
      email: '',
      status: null
    });

    const fetchStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/students/${props.studentId}`);
        student.value = response.data;
        student.value.status = Number(student.value.status); // Garantir que o status seja tratado como string
      } catch (error) {
        console.error('Erro ao buscar aluno:', error);
      }
    };

    const updateStudent = async () => {
      try {
        await axios.put(`http://localhost:8000/api/students/${props.studentId}`, student.value);
        alert('Aluno atualizado com sucesso!');
      } catch (error) {
        console.error('Erro ao atualizar aluno:', error);
      }
    };

    onMounted(fetchStudent);

    return {
      student,
      updateStudent
    };
  }
};
</script>

<style scoped>
/* Estilos específicos do componente */
</style>
