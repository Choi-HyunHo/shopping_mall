import React from "react";

const NewProduct = () => {
	return (
		<div className="w-full text-center">
			<h1 className="text-2xl font-bold my-4">새로운 제품 등록</h1>
			<form className="flex flex-col px-12">
				<input type="file" accept="image/*" name="file" required />
				<input type="text" name="title" placeholder="제품명" required />
				<input type="number" name="price" placeholder="가격" required />
				<input
					type="text"
					name="category"
					placeholder="카테고리"
					required
				/>
				<input
					type="text"
					name="description"
					placeholder="제품 설명"
					required
				/>
				<input
					type="text"
					name="options"
					placeholder="옵션들(콤마(,)로 구분)"
					required
				/>
			</form>
		</div>
	);
};

export default NewProduct;
