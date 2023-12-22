import { memo } from 'react';
import { useFetcher } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

const UpdatePriority = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="small">Prioritize</Button>
    </fetcher.Form>
  );
};

export default memo(UpdatePriority);

export const action = async ({ request, params }) => {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
};
