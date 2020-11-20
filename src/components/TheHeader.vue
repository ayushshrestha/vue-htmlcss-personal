<template>
  <div>
  <!-- Small Devices Header  ============================================= -->
      <div class="dtr-responsive-header fixed-top d-none">
          <div class="container"> 
              
              <!-- small devices logo --> 
              <a href="index.html"><img src="assets/images/logo-dark.png" alt="logo"></a> 
              <!-- small devices logo ends --> 
              
              <!-- menu button -->
              <button id="dtr-menu-button" class="dtr-hamburger" type="button"><span class="dtr-hamburger-lines-wrapper"><span class="dtr-hamburger-lines"></span></span></button>
          </div>
          <div class="dtr-responsive-header-menu"></div>
      </div>
      <!-- Small Devices Header ends ============================================= --> 
      
      <!-- Header ============================================= -->
      <header id="dtr-header-global" class="fixed-top">
          <div class="container">
              <div class="d-flex align-items-center justify-content-between"> 
                  
                  <!-- header left starts -->
                  <div class="dtr-header-left"> 
                      
                      <router-link class="logo-default dtr-scroll-link" :to="{ name: 'home' }">
                      <img src="@/assets/images/logo-dark.png" alt="logo" width="108">
                      </router-link>

                      <router-link class="logo-alt dtr-scroll-link" :to="{ name: 'home' }">
                        <img src="@/assets/images/logo-dark.png" alt="logo" width="108">
                      </router-link>
                      
                  </div>
                  <!-- header left ends --> 
                  
                  <!-- menu starts-->
                  <div class="dtr-header-right">
                      <div class="main-navigation dtr-menu-dark">
                          <ul v-if="!isAuthenticated" class="sf-menu dtr-scrollspy dtr-nav dark-nav-on-load dark-nav-on-scroll">
                            <li class="nav-item">
                              <router-link
                                class="nav-link"
                                active-class="active"
                                exact
                                :to="{ name: 'home' }"
                              >
                                Home
                              </router-link>
                            </li>
                            <li class="nav-item">
                              <router-link
                                class="nav-link"
                                exact
                                :to="{ name: 'home' }"
                              >
                                About
                              </router-link>
                            </li>
                            <li class="nav-item">
                              <router-link
                                class="nav-link"
                                exact
                                :to="{ name: 'home' }"
                              >
                                Skills
                              </router-link>
                            </li>
                            <li class="nav-item">
                              <router-link
                                class="nav-link"
                                exact
                                :to="{ name: 'home' }"
                              >
                                Portfolio
                              </router-link>
                            </li>
                            <li class="nav-item">
                              <router-link
                                class="nav-link"
                                exact
                                :to="{ name: 'home' }"
                              >
                                Blog
                              </router-link>
                            </li>
                            <li class="nav-item">
                              <router-link
                                class="nav-link"
                                exact
                                :to="{ name: 'home' }"
                              >
                                Contact
                              </router-link>
                            </li>
                            <li class="nav-item">
                              <router-link
                                class="nav-link"
                                active-class="active"
                                exact
                                :to="{ name: 'login' }"
                              >
                                <i class="ion-compose"></i>Sign in
                              </router-link>
                            </li>
                            <li class="nav-item">
                              <router-link
                                class="nav-link"
                                active-class="active"
                                exact
                                :to="{ name: 'register' }"
                              >
                                <i class="ion-compose"></i>Sign up
                              </router-link>
                            </li>
                          </ul>
                          <ul v-else class="sf-menu dtr-scrollspy dtr-nav dark-nav-on-load dark-nav-on-scroll">
                            <li class="nav-item">
                              <router-link
                                class="nav-link"
                                active-class="active"
                                exact
                                :to="{ name: 'home' }"
                              >
                                Home
                              </router-link>
                            </li>
                            <li class="nav-item">
                              <router-link
                                class="nav-link"
                                active-class="active"
                                exact
                                :to="{ name: 'home' }"
                              >
                                About
                              </router-link>
                            </li>
                            <li class="nav-item">
                              <router-link
                                class="nav-link"
                                active-class="active"
                                exact
                                :to="{ name: 'home' }"
                              >
                                Skills
                              </router-link>
                            </li>
                            <li class="nav-item">
                              <router-link
                                class="nav-link"
                                active-class="active"
                                exact
                                :to="{ name: 'home' }"
                              >
                                Portfolio
                              </router-link>
                            </li>
                            <li class="nav-item">
                              <router-link
                                class="nav-link"
                                active-class="active"
                                exact
                                :to="{ name: 'home' }"
                              >
                                Blog
                              </router-link>
                            </li>
                            <li class="nav-item">
                              <router-link
                                class="nav-link"
                                active-class="active"
                                exact
                                :to="{ name: 'home' }"
                              >
                                Contact
                              </router-link>
                            </li>
                          </ul>
                      </div>
                  </div>
                  <!-- menu ends --> 
                  
              </div>
          </div>
      </header>
      <!-- header ends ================================================== --> 
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RwvHeader",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  }
};
</script>
