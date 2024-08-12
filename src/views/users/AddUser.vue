<template>
  <div>
    <h4>Adicionar Usuário</h4>
    <form @submit.prevent="submitForm">
      <div class="row">
      <div class="form-group col-md-6">
        <label for="name">Nome</label>
        <input type="text" v-model="name" id="name" class="form-control" required>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="email" id="email" class="form-control" required>
      </div>
      </div>

      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" v-model="password" id="password" class="form-control" required>
      </div>

      <div class="form-group">
        <label for="type">Tipo de Usuário</label>
        <select v-model="type" id="type" class="form-control" required>
          <option value="admin">Admin</option>
          <option value="aluno">Aluno</option>
        </select>
      </div>

      <div class="form-group">
        <label for="status">Status</label>
        <select v-model="status" id="status" class="form-control" required>
          <option value="1">Sim</option>
          <option value="0">Não</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">Adicionar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      status: 0,
      type: 'User',
      router: useRouter(),
    };
  },
  methods: {
    submitForm() {
      axios.post('http://localhost:8000/api/users', {
        name: this.name,
        email: this.email,
        password: this.password,
        status: this.status,
        type: this.type,
      })
      .then(() => {
        alert('Usuário adicionado com sucesso!');
        this.resetForm();
        this.router.push('/users'); // Use this.router para redirecionar
      })
      .catch(error => {
        console.error('Erro ao adicionar usuário:', error);
      });
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.password = '';
      this.status = 0;
      this.type = 'User';
    },
  },
};
</script>
