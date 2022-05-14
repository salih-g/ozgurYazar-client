<template>
	<section>
		<div class="about">
			<h1>Selam !</h1>
			<p>
				Issız,yalnız, puslu bir gecede yürürken kaybolmuş bir ürperti
				hissedersin, o ürperti her saniye koşarak sana yaklaşır. Bir baykuşun
				çığlığına yıldızlar eşlik eder ama milyonlarca kilometre uzakta olan bu
				yıldızlar karanlığa ve yalnızlığınıza yenik düşer ve gördüklerin
				konusunda seni yanıltabilir. Tüm bu duygu durum değişimlerinin nedeni
				kesinlikle benimle alakası yok saçmalama! Peki herhangi bir şeyle ilgisi
				olabilir mi? Kedin, çay bardağın, herkesten özenle gizlediğin günlüğün,
				nükleer reaktörler, unutulan şarkılar, süt, uyduruk kitaplar, dışarıda
				unutulmuş şemsiye, sülükler, Sokollu Mehmet Paşa… <br />
				Tabiki Hayır! Tüm bunlar alakasız, anlamsız, lüzumsuz şeyler önemli olan
				şu an arkandaki şey… <br />
				Arkanda hiçbir şey yok.
			</p>
			<AboutForm />
		</div>
	</section>
</template>

<script>
import AboutForm from '@/components/About/AboutForm.vue';

export default {
	name: 'About',
	components: {
		AboutForm,
	},
};
</script>

<style scoped>
.about {
	width: 60%;
	margin: 0 auto;
}
</style>
