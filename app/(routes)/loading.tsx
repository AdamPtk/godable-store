import Container from '@/components/ui/container';
import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <Container>
      <div className="space-y-4 pb-10">
        <div className="flex flex-col gap-y-4 px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="grid grid-cols-1">
              <div className="group flex flex-col md:flex-row cursor-pointer p-3 space-y-4">
                <Skeleton className="aspect-square rounded-xl relative w-full md:w-2/3" />
                <div className="flex flex-col justify-center md:ml-10">
                  <Skeleton className="w-[300px] h-[40px] mb-4 rounded-xl" />
                  <Skeleton className="w-[100px] h-[40px] mb-4 rounded-xl" />
                  <Skeleton className="w-[100px] h-[40px] mb-4 rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 pb-10">
        <div className="flex flex-col gap-y-4 px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="grid grid-cols-1">
              <div className="group flex flex-col md:flex-row cursor-pointer p-3 space-y-4">
                <Skeleton className="aspect-square rounded-xl relative w-full md:w-2/3" />
                <div className="flex flex-col justify-center md:ml-10">
                  <Skeleton className="w-[300px] h-[40px] mb-4 rounded-xl" />
                  <Skeleton className="w-[100px] h-[40px] mb-4 rounded-xl" />
                  <Skeleton className="w-[100px] h-[40px] mb-4 rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 pb-10">
        <div className="flex flex-col gap-y-4 px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="grid grid-cols-1">
              <div className="group flex flex-col md:flex-row cursor-pointer p-3 space-y-4">
                <Skeleton className="aspect-square rounded-xl relative w-full md:w-2/3" />
                <div className="flex flex-col justify-center md:ml-10">
                  <Skeleton className="w-[300px] h-[40px] mb-4 rounded-xl" />
                  <Skeleton className="w-[100px] h-[40px] mb-4 rounded-xl" />
                  <Skeleton className="w-[100px] h-[40px] mb-4 rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Loading;
