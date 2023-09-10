import Container from '@/components/ui/container';
import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <Container>
      <div className="space-y-4 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
          <Skeleton className="rounded-xl aspect-square md:aspect-[2.4/1]" />
        </div>
        <div className="flex flex-col gap-y-4 px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <Skeleton className="font-bold text-3xl w-[300px] h-[35px]" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[...Array(6).keys()].map((item) => (
                <div
                  key={item}
                  className="group rounded-xl space-y-4 aspect-square"
                >
                  <Skeleton className="h-full w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Loading;
