export default ({ baseClass, image, name, color }) => (
	<div className={`${baseClass}__product-container flex--center`}>
		<div>
			<img src={image} alt={name} />
		</div>
		<div className={`${baseClass}__product-label`}>
			<label className={`${baseClass}__product-name bold fluid`}>{name}</label>
			<span className={`${baseClass}__product-color color--palewhite fluid`}>{color}</span>
		</div>
	</div>
)