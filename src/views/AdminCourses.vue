<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Sidebar Menu -->
      <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-dark sidebar sticky">
        <div class="position-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active">
                <font-awesome-icon icon="home" /> Dashboard
              </router-link>
            </li>

            <!-- Dropdown Cursos -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="coursesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <font-awesome-icon icon="book" /> Cursos
              </a>
              <ul class="dropdown-menu" aria-labelledby="coursesDropdown">
                <li>
                  <router-link to="/courses" class="dropdown-item" active-class="active">
                    Todos os Cursos
                  </router-link>
                </li>
                <li>
                  <router-link to="/courses/add" class="dropdown-item" active-class="active">
                    Adicionar Curso
                  </router-link>
                </li>
              </ul>
            </li>

            <!-- Dropdown Alunos -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="studentsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <font-awesome-icon icon="users" /> Alunos
              </a>
              <ul class="dropdown-menu" aria-labelledby="studentsDropdown">
                <li>
                  <router-link to="/students" class="dropdown-item">
                    Todos os Alunos
                  </router-link>
                </li>
                <li>
                  <router-link to="/students/add" class="dropdown-item">
                    Adicionar Aluno
                  </router-link>
                </li>
              </ul>
            </li>

            <!-- Dropdown Usários -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="usersDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <font-awesome-icon icon="users" /> Usuários
              </a>
              <ul class="dropdown-menu" aria-labelledby="usersDropdown">
                <li>
                  <router-link to="/users" class="dropdown-item">
                    Todos os Usuários
                  </router-link>
                </li>
                <li>
                  <router-link to="/users/add" class="dropdown-item">
                    Adicionar Usuário</router-link>
                </li>
              </ul>
            </li>

            <!-- <li class="nav-item">
              <router-link to="/users" class="nav-link" active-class="active">
                <font-awesome-icon icon="users" /> Usuários
              </router-link>
            </li> -->
          </ul>
        </div>
      </nav>

      <!-- Main Content Area -->
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <!-- Content Header -->
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Painel de Controle</h1>
        </div>

        <!-- Dynamic Component Rendering -->
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminCourses',
};
</script>

<style scoped>
#sidebar {
  height: 100vh;
  padding-top: 20px;
  max-width: 200px;;
}

.nav-item .nav-link {
    color: #ffffff;
    cursor: pointer;
}
.nav-item:hover {
    background-color: #333333;
}
.nav-item .nav-link.active {
    color: #ff7e05;
}
</style>