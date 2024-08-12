<template>
  <div>
    <h2>Editar Usuário</h2>
    <form @submit.prevent="updateUser">
      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" v-model="form.name" id="name" class="form-control" required>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="form.email" id="email" class="form-control" required>
      </div>

      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" v-model="form.password" id="password" class="form-control">
      </div>

      <div class="form-group">
        <label for="type">Tipo de Usuário</label>
        <select v-model="form.type" id="type" class="form-control" required>
          <option value="admin">Admin</option>
          <option value="aluno">Aluno</option>
        </select>
      </div>

      <div class="form-group">
        <label for="status">Status</label>
        <select v-model="form.status" id="status" class="form-control" required>
          <option value="1">Sim</option>
          <option value="0">Não</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">Salvar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const form = ref({
      name: '',
      email: '',
      password: '',
      type: 'aluno',
      status: '0'
    });

    const route = useRoute();
    const router = useRouter();

    const fetchUser = () => {
      axios.get(`http://localhost:8000/api/users/${route.params.userId}`)
        .then((response) => {
          form.value = response.data;
        })
        .catch((error) => {
          console.error('Erro ao buscar dados do usuário:', error);
        });
    };

    const updateUser = () => {
      axios.put(`http://localhost:8000/api/users/${route.params.userId}`, form.value)
        .then(() => {
          router.push('/users');
          alert('Usuário atualizado com sucesso!');
        })
        .catch((error) => {
          console.error('Erro ao atualizar usuário:', error);
        });
    };

    // Fetch the user data when the component is mounted
    fetchUser();

    return {
      form,
      updateUser
    };
  }
};
</script>
