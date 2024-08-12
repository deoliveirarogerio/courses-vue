<template>
   <div>
    <h4>Lista de Usuários</h4>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Ativo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.type }}</td>
          <td>{{ user.status === 1 ? 'Sim' : 'Não' }}</td>
          <td>
            <!-- <router-link :to="`/users/${user.id}/details`" class="btn btn-info btn-sm">
              <font-awesome-icon icon="eye" />
            </router-link> -->
            <router-link :to="`/users/${user.id}/edit`" class="btn btn-warning btn-sm ml-2"><font-awesome-icon icon="pencil" /></router-link>
            <button @click="deleteUser(user.id)" class="btn btn-danger btn-sm ml-2">
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
      users: [],
    };
  },
  methods: {
    fetchUsers() {
      axios.get('http://localhost:8000/api/users')
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.error('Erro ao buscar usuários:', error);
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
    this.fetchUsers();
  },
};
</script>

<style>
</style>