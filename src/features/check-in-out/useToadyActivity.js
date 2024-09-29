import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useToadyActivity() {
  const { isLoading, data: activities } = useQuery({
    queryKey: ["toady-activity"],
    queryFn: getStaysTodayActivity,
  });

  return { isLoading, activities };
}
