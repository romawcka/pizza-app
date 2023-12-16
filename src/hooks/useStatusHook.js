import { useNavigation } from "react-router-dom";

// полный вариант
// export const useIsLoading = () => {
//   const navigation = useNavigation;
//   const isLoading = navigation.state === 'loading'
// }

// сокращенный вариант
export const useIsLoading = () => useNavigation().state === "loading";

// полный вариант
// export const useIsSubmitting = () => {
//   const navigation = useNavigation;
//   const isSubmitting = navigation.state === 'submitting'
// }
// сокращенный вариант
export const useIsSubmitting = () => useNavigation().state === "submitting";
