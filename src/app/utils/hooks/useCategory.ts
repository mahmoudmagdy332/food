import { useCategoryCoursesMutation } from "../../services/mutation";

function useCategory() {
  const { mutate, data, isPending, isSuccess, error, isError } =
    useCategoryCoursesMutation();
  return { mutate, isSuccess, isPending, isError, error, data };
}

export default useCategory;
