export default function TeamSection() {
  return (
    <section className="w-full pb-12 md:pb-24 lg:pb-32" id="team">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet Our Team
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The talented group members behind our community.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://media.licdn.com/dms/image/D4D35AQHIpFb48fQ0tQ/profile-framedphoto-shrink_800_800/0/1714569817649?e=1721199600&v=beta&t=zeOTfBUXWcKUqtbs-pKaLA5n_XqNjTlvL0t-gEkce7w"
              alt="Team Member"
              width={150}
              height={150}
              className="rounded-full w-32 h-32 object-cover"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">Aryan Soni</h3>
              <p className="text-muted-foreground">President</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQFeUeZWMVSbyA/profile-displayphoto-shrink_800_800/0/1710078330454?e=1726099200&v=beta&t=ZAZ6II_72iW20W5hcYbeYK6qBI7StKw6n64iS9ogxW8"
              alt="Team Member"
              width={150}
              height={150}
              className="rounded-full w-32 h-32 object-cover"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">Soumik Roy</h3>
              <p className="text-muted-foreground">General Secretary</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQFY2f8rkftk_g/profile-displayphoto-shrink_800_800/0/1714715920193?e=1726099200&v=beta&t=FPoUNCdaq9n4apCG3CS86J6ZR5iNK8ocy1lin1kAdCQ"
              alt="Team Member"
              width={150}
              height={150}
              className="rounded-full w-32 h-32 object-cover"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">Abhay Pratap Singh</h3>
              <p className="text-muted-foreground">Event Management Co Lead</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src="https://media.licdn.com/dms/image/D4D35AQEfVgGjEUw10Q/profile-framedphoto-shrink_800_800/0/1708448358165?e=1721199600&v=beta&t=bfMzHd83XWnZ9cy-1SP_oAE6mNkNSZNIZ4POPtQVHik"
              alt="Team Member"
              width={150}
              height={150}
              className="rounded-full w-32 h-32 object-cover"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">Pratik Narain</h3>
              <p className="text-muted-foreground">Social Media Lead</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
