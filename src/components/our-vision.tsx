import { Building2Icon, ThumbsUpIcon, Users2Icon } from "lucide-react";

export default function VisionSection() {
  return (
    <>
      {/* Icon Blocks */}
      {/* <div className="container py-12 lg:py-16"> */}
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Grid */}
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold lg:text-4xl">Our vision</h2>
              <p className="mt-3 text-muted-foreground">
                The Eureka Club is dedicated to fostering a collaborative and
                innovative environment where students can explore, learn, and
                create. Our vision is to become a hub for technological
                advancement and community building at VIT Bhopal University.
              </p>
            </div>
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex">
                <Building2Icon className="flex-shrink-0 mt-7 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Promoting Innovation
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    We strive to promote a culture of innovation by encouraging
                    creative thinking and providing resources for students to
                    develop their ideas into tangible projects.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <Users2Icon className="flex-shrink-0 mt-7 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Building a Strong Community
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Our goal is to build a vibrant community of tech enthusiasts
                    who collaborate, share knowledge, and support each other in
                    their learning journeys.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex items-start">
                <ThumbsUpIcon className="flex-shrink-0 mt-7 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Providing Learning Opportunities
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    We are committed to providing ample learning opportunities
                    through workshops, seminars, and hands-on projects that
                    enhance the skills and knowledge of our members.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
}
