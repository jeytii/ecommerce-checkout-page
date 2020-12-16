export default ({ baseClass, size }) => (
	<div>
		<select className={`${baseClass}__select fluid`} name='size' id='size'>
			<option value={size}>{size}</option>
		</select>
	</div>
)