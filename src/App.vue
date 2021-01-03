<template>
  <div id="app">

		<!-- REF: NAV -->
		<v-navigation-drawer
			permanent
			class="e-nav"
			:expand-on-hover="!nav_permanence"
			mini-variant-width="68"
			floating
		>
			<div class="e-nav-logo-container" @click="nav_permanence ^= true">
				<img 
					:src="require('@/assets/logo.png')"
					class="e-nav-logo"
				>
				<div class="e-logo-overlay">
					edhub
				</div>
			</div>
			<div class="e-nav-routes-container">
				<div
					v-for="(x, ia) in routes"
					:key="`section-${ia}`"
					class="e-nav-route-section"
				>
					<div class="e-nav-sub">
						{{ x.subheader }}
					</div>
					<router-link 
						v-for="(y, ib) in x.routes"
						:key="`section-${ia}-route-${ib}`"
						class="e-nav-route"
						:to="y.path"
						v-ripple="{ class: 'e-nav-ripple' }"
					>
						<v-icon class="e-nav-icon">
							mdi-{{ y.icon }}
						</v-icon>
						<div>
							{{ y.name }}
						</div>
					</router-link>
				</div>
			</div>
		</v-navigation-drawer>
		<router-view 
			class="e-router-view"
		/>
  </div>
</template>

<script>
import routes from './router/routes';

export default {

	data() {
		return {
			routes,
			nav_permanence: true,
		}
	},

	created() {
		//
	},

	methods: {
		//
	}
};
</script>

<style lang="scss">
@import './styles/global.scss';
@import './styles/nav.scss';
</style>
