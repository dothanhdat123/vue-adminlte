<template>
  <aside id="slider" class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="~admin-lte/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>{{ currentUser.name }}</p>
          <a href="#"><i class="fa fa-circle" :style="`color:${currentUser.state.color}`"></i> {{ currentUser.state.name
            }}</a>
        </div>
      </div>
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li class="active treeview">
          <router-link to="/Dashboard" class="nav-link">
            <i class="fa fa-tachometer" aria-hidden="true"></i><span>Dashboard</span><i class="fa fa-angle-left pull-right"></i>
          </router-link>
          <ul class="treeview-menu">
            <li class="active">
              <router-link to="/UserHightChart" class="nav-link">
                <i class="fa fa-user" aria-hidden="true"></i>
                <span>
                    User
                  </span>
              </router-link>
            </li>
            <li>
              <router-link to="/RevenueHightChart" class="nav-link">
                <i class="fa fa-money" aria-hidden="true"></i>
                <span>
                   Revenue
                  </span>
              </router-link>
            </li>
            <li>
              <router-link to="/VolumeHightChart" class="nav-link">
                <i class="fa fa-volume-up"></i>
                <span>
                    Volume play
                  </span>
              </router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <router-link to="/User" class="nav-link">
            <i class="fa fa-user" aria-hidden="true"></i>
            <span>
                  User
                </span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Game" class="nav-link">
            <i class="fa fa-gamepad" aria-hidden="true"></i>
            <span>
                    Game
                  </span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Deposit" class="nav-link">
            <i class="fa fa-credit-card" aria-hidden="true"></i>
            <span>
                  Deposit
                </span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Withdraw" class="nav-link">
            <i class="fa fa-money" aria-hidden="true"></i>
            <span>
                  Withdraw
                </span>
          </router-link>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
  import {mapGetters} from 'vuex'
  import VASlideItem from './components/VASlideItem'

  export default {
    name: 'va-slider',
    props: {
      slideMenuItems: {
        type: Array,
        default: []
      }
    },
    created () {

    },
    computed: {
      ...mapGetters([
        'currentUser'
      ])
    },
    components: {
      'va-slide-item': VASlideItem
    }
  }
</script>
