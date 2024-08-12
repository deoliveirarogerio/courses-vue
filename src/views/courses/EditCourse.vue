<template>
  <div>
    <h4>Editar Curso</h4>
    <form @submit.prevent="updateCourse">
    <div class="row">
      <div class="mb-3 col-md-6">
        <label for="title" class="form-label">Título</label>
        <input type="text" v-model="course.title" class="form-control" id="title" required>
      </div>
      <div class="mb-3 col-md-6" >
        <label for="description" class="form-label">Descrição</label>
        <textarea name="description" v-model="course.description" class="form-control" id="description" required></textarea>
      </div>
    </div>

    <div class="row">
      <div class="mb-3 col-md-2">
        <label for="price" class="form-label">Preço</label>
        <input type="number" v-model="course.price" class="form-control" id="price" required>
      </div>
      <div class="mb-3 col-md-4">
        <label for="status" class="form-label">Status</label>
        <select v-model="course.status" class="form-select" id="status" required>
          <option value="1">Ativo</option>
          <option value="0">Inativo</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="mb-3 col-md-4">
        <label for="registration_start" class="form-label">Início das Inscrições</label>
        <input type="date" v-model="course.registration_start" class="form-control" id="registration_start" required>
      </div>
      <div class="mb-3 col-md-4">
        <label for="registration_end" class="form-label">Fim das Inscrições</label>
        <input type="date" v-model="course.registration_end" class="form-control" id="registration_end" required>
      </div>
      <div class="mb-3 col-md-4">
        <label for="remaining_slots" class="form-label">Vagas Restantes</label>
        <input type="number" v-model="course.remaining_slots" class="form-control" id="remaining_slots" required>
      </div>
      </div>
      <button type="submit" class="btn btn-primary">Atualizar Curso</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

import { ref, onMounted } from 'vue';

export default {
  name: 'EditCourse',
  props: {
    courseId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const course = ref({});

    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/courses/${props.courseId}`);
        course.value = response.data;
      } catch (error) {
        console.error('Erro ao buscar curso:', error);
      }
    };

    const updateCourse = async () => {
      try {
        await axios.put(`http://localhost:8000/api/courses/${props.courseId}`, course.value);
        alert('Curso atualizado com sucesso!');
      } catch (error) {
        console.error('Erro ao atualizar curso:', error);
      }
    };

    onMounted(fetchCourse);

    return {
      course,
      updateCourse
    };
  }
};
</script>

<style scoped>
/* Estilos específicos do componente */
</style>