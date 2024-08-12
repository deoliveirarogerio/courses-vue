<template>
  <div class="container">
    <h2>Adicionar Novo Curso</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="title" class="form-label">Nome do Curso</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="course.title"
          required
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Descrição</label>
        <textarea
          class="form-control"
          id="description"
          v-model="course.description"
          required
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="price" class="form-label">Preço do curso</label>
        <input
          type="number"
          class="form-control"
          id="price"
          v-model="course.price"
          required
          step="0.01"
        />
      </div>
      <button type="submit" class="btn btn-success">Adicionar Curso</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      course: {
        title: '',
        description: '',
        price: '',
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .post('http://localhost:8000/api/courses', this.course)
        .then(() => { 
          alert('Curso adicionado com sucesso!');
          this.course.title = '';
          this.course.description = '';
          this.course.price = '';
          this.$router.push('/courses');
        })
        .catch(error => {
          console.error('Erro ao adicionar curso:', error);
        });
    },
  },
};
</script>

<style scoped>

</style>