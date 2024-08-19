import { useState } from "react";
import{Category, Product} from "@/interfaces/product";

const categoryData: Category[]=[
    {
    category_id:0,
    category:"전체",
    sort:0,
},
{

}
]

const ProductSearch = () => {
    //카테고리 목록데이터 생성

    const[categories,setCategories] = useState<Category[]>([]);
  return (
  <div>
    {/* 제품 카테고리 선택영역 */}
    <div className="mt-4 ml-4">
        <select>
            <option value="0">전체</option>
            <option value="1">냉장고</option>
            <option value="2">TV</option>
            <option value="3">컴퓨터</option>
        </select>
    </div>
    {/* 제품목록 출력영역 */}
    <div className="mt-4 ml-4">
        <table>
            <thead>
                <tr>
                    <th>제품번호</th>
                    <th>제품명</th>
                    <th>제조사</th>
                    <th>가격</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                
            </tbody>
        </table>
    </div>

  </div>
  )
};

export default ProductSearch;
