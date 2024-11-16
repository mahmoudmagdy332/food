import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ArticleCategoryQuery } from "../../services/queries";
import { setArticleCat } from "../../slices/ArticleCatSlice";

export const useCategoryArticle = ({ name }: { name: string | undefined }) => {
  const dispatch = useDispatch();
  const { isSuccess, data, isLoading, isError, error } = ArticleCategoryQuery({
    name,
  });

  useEffect(() => {
    if (data) {
      console.log(data?.data);

      dispatch(setArticleCat(data.data.categoryArticles));
    }
  }, [data]);

  if (isError) {
    console.error("Error fetching courses:", error);
  }

  return { data, isSuccess, isLoading, isError, error };
};
