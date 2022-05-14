<template>
	<div class="about-form">
		<form>
			<fieldset>
				<legend>Bana ulasın.</legend>
				<div class="form-group row">
					<label for="staticEmail" class="col-sm-2 col-form-label">Adın:</label>
					<div class="col-sm-10">
						<input
							id="staticEmail"
							type="text"
							class="form-control-plaintext"
							placeholder="Ozgur Yazar"
						/>
					</div>
				</div>
				<div class="form-group">
					<label for="emailInput" class="form-label mt-4">Mail adresin:</label>
					<input
						type="email"
						id="emailInput"
						class="form-control"
						aria-describedby="emailHelp"
						placeholder="Mailini girer misin ?"
					/>
					<small id="emailHelp" class="form-text text-muted"
						>Sana geri dönüs yapabilmem için gerekli.</small
					>
				</div>
				<div class="form-group">
					<label for="staticTextArea" class="form-label mt-4">Mesajın</label>
					<textarea
						class="form-control"
						id="staticTextArea"
						rows="4"
					></textarea>
				</div>

				<button type="submit" class="btn btn-primary mt-3">Gonder</button>
			</fieldset>
		</form>
	</div>
</template>

<script>
export default {
	name: 'AboutForm',
	props: {},
};
</script>

<style scoped></style>
